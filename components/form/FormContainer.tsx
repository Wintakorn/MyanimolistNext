"use client";
import { useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { ActionFunction } from "@/utils/types";
const initialState = {
  message: "",
};

const FormContainer = ({ action, children }:
   {action:ActionFunction, children: React.ReactNode }) => {
  const { toast } = useToast();
  const [state, formAction] = useActionState(action, initialState);
  // console.log("state ja", state);

  useEffect(() => {
    // code body
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
