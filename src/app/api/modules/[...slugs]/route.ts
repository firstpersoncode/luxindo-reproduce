import { Module_apiHandler } from '@/modules/app.modules'

export const GET = Module_apiHandler('Property')('GET')
export const POST = Module_apiHandler('Property')('POST')
export const PUT = Module_apiHandler('Property')('PUT')
export const PATCH = Module_apiHandler('Property')('PATCH')
export const DELETE = Module_apiHandler('Property')('DELETE')
