'use client';
import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { IVerifyData } from "@/types/Verify";
import VerifyAction from "@/services/Verify/VerifyAction";
import { sendCode } from "@/services/Verify/SendCode";
import { useDispatch } from "react-redux";
import { setCredentials } from '@/lib/store/reducers/user';
import { toast } from "react-toastify";
import { motion } from "motion/react";
import { childYDiv, parentDiv } from "@/services/ParentAndChildMotions";

const initialState = {
  errors: {},
  success: false,
  message: '',
  user: null,
  access_token: ''
}

export default function VerifyForm() {
  const [otp, setOtp] = useState<string | null>(null);
  const [state, action, pending] = useActionState<IVerifyData, FormData>(VerifyAction, initialState);
  const [message, setMessage] = useState<string | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    sendCode();
  }, []);

  useEffect(() => {
    if (state?.success && state?.user && state?.access_token) {
      dispatch(
        setCredentials({
          user: state.user,
          access_token: state.access_token,
        }),
      );
      toast.success(state?.message);
      router.replace('/');
    }
  }, [state?.success, state?.user, state?.access_token, dispatch, router, state?.message]);


  useEffect(() => {
    if (state?.message) setMessage(state.message);
  }, [state?.message]);


  const handleSendCode = async () => sendCode();

  return (
    <form action={action} className="mt-8">
      <div className="flex flex-col gap-4">
        <input type="hidden" name="code" value={otp || ''} />
        <motion.div
          variants={parentDiv}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }} className="flex items-center justify-center">
          <InputOTP autoFocus onChange={(value) => setOtp(value)} maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTPGroup>
              <motion.div
                variants={childYDiv}
              >
                <InputOTPSlot index={0} />
              </motion.div>
              <motion.div
                variants={childYDiv}
              >
                <InputOTPSlot index={1} />
              </motion.div>
              <motion.div
                variants={childYDiv}
              >
                <InputOTPSlot index={2} />
              </motion.div>
              <motion.div
                variants={childYDiv}
              >
                <InputOTPSlot index={3} />
              </motion.div>
              <motion.div
                variants={childYDiv}
              >
                <InputOTPSlot index={4} />
              </motion.div>
            </InputOTPGroup>
          </InputOTP>
        </motion.div>
        {state?.errors?.code && <span className="text-red-500 text-center">{state.errors.code[0]}</span>}
        {message && <span className="text-red-500 text-center">{message}</span>}
        <motion.button
          initial={{ opacity: 0, scale: 0.5, }}
          whileInView={{ opacity: 1, scale: [0.8, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 30, damping: 20, delay: 0.8 }}
          disabled={pending} className="bg-main rounded-md text-white py-3 w-[90%] mx-auto cursor-pointer mt-2 disabled:opacity-50 disabled:cursor-not-allowed">{
            pending ? <span className="flex items-center gap-2 justify-center"><span className="loader"></span> Loading</span> : 'Verify'
          }</motion.button>
        <motion.div
          variants={parentDiv}
          initial='hidden'
          whileInView='visible'
          className="font-bold text-second text-center">
          <motion.h6
            variants={childYDiv}
          >Didn’t receive any code? <span onClick={handleSendCode} className="text-orange cursor-pointer">Resend Again</span></motion.h6>
        </motion.div>
      </div>
    </form>
  )
}
