export const baseUrl = 'https://samar-al-server.eddi.cloud/helper-elder/api';

export function getHttpAuthHeaders(jwt) {
  return {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };
}
