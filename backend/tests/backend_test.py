"""Backend regression tests for Shuchi Shukla AI Portfolio API."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://agentic-ai-builder-2.preview.emergentagent.com").rstrip("/")


@pytest.fixture(scope="module")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---- Health ----
class TestHealth:
    def test_root(self, api):
        r = api.get(f"{BASE_URL}/api/", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert isinstance(data["message"], str) and len(data["message"]) > 0


# ---- Status ----
class TestStatus:
    def test_post_and_get_status(self, api):
        payload = {"client_name": "TEST_pytest_client"}
        p = api.post(f"{BASE_URL}/api/status", json=payload, timeout=15)
        assert p.status_code == 200
        body = p.json()
        assert body["client_name"] == "TEST_pytest_client"
        assert "id" in body and "timestamp" in body

        g = api.get(f"{BASE_URL}/api/status", timeout=15)
        assert g.status_code == 200
        rows = g.json()
        assert isinstance(rows, list)
        assert any(row.get("client_name") == "TEST_pytest_client" for row in rows)


# ---- GitHub proxy ----
class TestGitHub:
    def test_github_profile_octocat(self, api):
        r = api.get(f"{BASE_URL}/api/github/profile", params={"username": "octocat"}, timeout=20)
        assert r.status_code == 200
        data = r.json()
        assert data.get("user") is not None
        assert data["user"]["login"].lower() == "octocat"
        assert isinstance(data.get("repos"), list)

    def test_github_profile_default(self, api):
        r = api.get(f"{BASE_URL}/api/github/profile", timeout=20)
        assert r.status_code == 200
        data = r.json()
        # graceful empty state acceptable
        assert "repos" in data and isinstance(data["repos"], list)


# ---- Chat ----
class TestChat:
    def test_chat_simple_reply(self, api):
        sid = f"TEST_{uuid.uuid4()}"
        r = api.post(
            f"{BASE_URL}/api/chat",
            json={"session_id": sid, "message": "What does Shuchi do?"},
            timeout=60,
        )
        assert r.status_code == 200, r.text
        data = r.json()
        assert "reply" in data
        assert isinstance(data["reply"], str)
        assert len(data["reply"].strip()) > 0


# ---- Contact ----
class TestContact:
    def test_contact_submit(self, api):
        r = api.post(
            f"{BASE_URL}/api/contact",
            json={"name": "TEST_User", "email": "test@example.com", "message": "Hello"},
            timeout=15,
        )
        assert r.status_code == 200
        data = r.json()
        assert data.get("ok") is True
        assert "id" in data and isinstance(data["id"], str)
