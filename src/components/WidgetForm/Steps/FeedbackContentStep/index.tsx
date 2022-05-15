import { ReactNode } from 'react';

interface FeedbackContentStepProps {
  children: ReactNode;
}

function FeedbackContentStep({ children }: FeedbackContentStepProps) {
  return (
    <>
      <h1>FeedbackContentStep</h1>
      {children}
    </>
  );
}

export default FeedbackContentStep;
