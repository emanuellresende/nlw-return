import { ReactNode } from 'react';

interface FeedbackSuccessStepProps {
  children: ReactNode;
}

function FeedbackSuccessStep({ children }: FeedbackSuccessStepProps) {
  return (
    <>
      <h1>FeedbackSuccessStep</h1>
      {children}
    </>
  );
}

export default FeedbackSuccessStep;
