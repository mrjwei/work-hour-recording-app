"use client"

import React from "react"
import Button from "@/app/ui/button/button"
import { startWorking } from "@/app/lib/actions"
import {
  getFormattedDateString,
  getFormattedTimeString
} from '@/app/lib/helpers'

export default function StartWorkingButton({
  userid,
  disabled,
  ...props
}: {
  userid: string
  disabled: boolean
}) {
  const d = new Date()
  const date = getFormattedDateString(d)
  const starttime = getFormattedTimeString(d)
  const startWorkingAction = startWorking.bind(null, userid, date, starttime)
  return (
    <form action={startWorkingAction}>
      <Button
        type="submit"
        disabled={disabled}
        name="startWorking"
        className="w-full text-white bg-lime-600 mr-4"
        {...props}
      >
        Start Working
      </Button>
    </form>
  )
}
