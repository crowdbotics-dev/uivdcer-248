import axios from "axios"
const uivdcerAPI = axios.create({
  baseURL: "https://uivdcer-248.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return uivdcerAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_hnnjd_list(payload) {
  return uivdcerAPI.get(`/api/v1/hnnjd/`)
}
function api_v1_hnnjd_create(payload) {
  return uivdcerAPI.post(`/api/v1/hnnjd/`, payload)
}
function api_v1_hnnjd_retrieve(payload) {
  return uivdcerAPI.get(`/api/v1/hnnjd/${payload.id}/`)
}
function api_v1_hnnjd_update(payload) {
  return uivdcerAPI.put(`/api/v1/hnnjd/${payload.id}/`, payload)
}
function api_v1_hnnjd_partial_update(payload) {
  return uivdcerAPI.patch(`/api/v1/hnnjd/${payload.id}/`, payload)
}
function api_v1_hnnjd_destroy(payload) {
  return uivdcerAPI.delete(`/api/v1/hnnjd/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return uivdcerAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return uivdcerAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return uivdcerAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return uivdcerAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return uivdcerAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return uivdcerAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return uivdcerAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return uivdcerAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return uivdcerAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return uivdcerAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return uivdcerAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return uivdcerAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return uivdcerAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_hnnjd_list,
  api_v1_hnnjd_create,
  api_v1_hnnjd_retrieve,
  api_v1_hnnjd_update,
  api_v1_hnnjd_partial_update,
  api_v1_hnnjd_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
