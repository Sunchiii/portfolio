import { useCallback } from "react"
import {useSearchParams, useRouter, usePathname} from "next/navigation"

const searchParams = useSearchParams()
const router = useRouter()
const pathname = usePathname()

export const API_URL = "http://localhost:8080/v1";


export const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )