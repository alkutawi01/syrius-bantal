export const SESSION_COOKIE = 'syrius_admin_session';

export async function sha256Hex(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function isValidSession(cookieValue: string | undefined, adminPassword: string): Promise<boolean> {
  if (!cookieValue) return false;
  const expected = await sha256Hex(adminPassword);
  return cookieValue === expected;
}
