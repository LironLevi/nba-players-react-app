// Use this for configuration settings instead of scattering config "constants"
// throughout your application

export const MAX_SIZE_PAGE = "per_page=100";
export const API_BASE = "https://www.balldontlie.io/api/v1";
export const API_PLAYERS_ENDPOINT = `${API_BASE}/players`;
//export const API_PLAYERS_ENDPOINT = `${API_BASE}/players?${MAX_SIZE_PAGE}`;
export const API_TEAMS_ENDPOINT = `${API_BASE}/teams`;

export const SUPABASE_URL = process.env.SUPABASE_URL;
export const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
export const CONTACT_FORM_ENDPOINT = "/api/contact/";
export const CONTACT_FORM_TABLE_NAME = "contact_submissions";

// NOTE: the common approach is to set these values from environment variables
// and not to have the values "hard-coded" with the code.
// Then, you use the host or wherever the process is running to set the variables
// and you read them in here
