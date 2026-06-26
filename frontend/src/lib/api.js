const backendUrl = process.env.REACT_APP_BACKEND_URL?.replace(/\/$/, "") || "";

export const hasBackend = Boolean(backendUrl);
export const API = hasBackend ? `${backendUrl}/api` : null;
