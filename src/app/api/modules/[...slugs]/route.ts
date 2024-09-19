import { Module_apiHandler } from '@/modules/backend.modules'

const apiHandler = Module_apiHandler('Property')

export const GET = apiHandler('GET')
export const POST = apiHandler('POST')
export const PUT = apiHandler('PUT')
export const PATCH = apiHandler('PATCH')
export const DELETE = apiHandler('DELETE')
