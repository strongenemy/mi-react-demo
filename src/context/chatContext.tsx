import { NOOP_FUNC } from "@/constant/noop";
import React, { FC, createContext, useState, ReactNode } from "react";

export type SetType<T> = React.Dispatch<React.SetStateAction<T>>
export const ChatContext = createContext<{
  first: string
  setFirst: SetType<string>
}>({
  first: '1',
  setFirst: NOOP_FUNC,
})

export const ChatProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [first, setFirst] = useState<string>('1')

  return (
    <ChatContext.Provider value={{ first, setFirst }}>
      {children}
    </ChatContext.Provider>
  )
}
