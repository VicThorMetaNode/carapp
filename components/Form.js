import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@chakra-ui/react";

export default function FormCustom() {
  const [state, handleSubmit] = useForm("xjvljbnq");

  if (state.succeeded) {
    return <p className="mail-success">Thanks for joining!</p>;
  }

  return (
    <form className="fom-form" method="post" onSubmit={handleSubmit}>
      <input
        className="form-mail"
        placeholder="MAIL"
        type="email"
        id="email"
        name="email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <Button
        bg="#e7af5d"
        borderRadius="0px"
        border="0.7px"
        height="30px"
        className="btn-submit"
        type="submit"
        disabled={state.submitting}
        _focus={{
          boxShadow: "0 0 1px 2px #e7af5d, 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
        SEND
      </Button>
    </form>
  );
}
