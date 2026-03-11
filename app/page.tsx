"use client"
import { useState, useEffect } from "react"
import Loading from "./loading"
import Main_Component from "./components/main_component"

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) return <Loading />

  return <Main_Component />
}