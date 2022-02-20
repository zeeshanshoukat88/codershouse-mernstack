import React,{useState} from 'react';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp/StepOtp';




const steps = {
    1:StepPhoneEmail,
    2:StepOtp,
 
}

const Login = () => {
    const [step, setstep] = useState(1);
    const Step = steps[step];

   function onNext(){
       setstep(step+1);
   }
  return (

    <div><Step onNext={onNext}/></div>
  )
}

export default Login