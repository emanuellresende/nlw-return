
import { ArrowLeft } from 'phosphor-react';
import { FeedbackType, feedbackTypes } from '../../'
import CloseButton from '../../../CloseButton';
interface FeedbackContentStep {
  feedbackType: FeedbackType,
  onFeedbackRestartRequest: () => void
}
export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequest }: FeedbackContentStep) {
  const feedBackTypeInfo = feedbackTypes[feedbackType];
  return (

    <>
      <header>
        <button
          type='button'
          className='left-5 top-5 absolute text-zinc-400 hover:text-zinc-100'
          onClick={onFeedbackRestartRequest}
        >
          <ArrowLeft weight='bold'
            className='w-4 h-4' />
        </button>

        <span className='text-xl leading-6 flex items-center gap-2'>
          <img
            src={feedBackTypeInfo.image.source}
            alt={feedBackTypeInfo.image.alt}
            className='h-6 w-6'
          />
          {feedBackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
    </>
  );
}


