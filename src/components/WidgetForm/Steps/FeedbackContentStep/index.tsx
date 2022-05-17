
import { ArrowLeft, Camera } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '../../'
import CloseButton from '../../../CloseButton';
import { ScreenShotButton } from '../ScreenShotButton';
interface FeedbackContentStep {
  feedbackType: FeedbackType,
  onFeedbackRestartRequest: () => void,
  onFeedbackSend: () => void,

}
export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequest, onFeedbackSend }: FeedbackContentStep) {
  const feedBackTypeInfo = feedbackTypes[feedbackType];
  const [screenShot, setScreenShoot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    console.log({
      screenShot, comment
    })
    onFeedbackSend();
  }
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
      <form
        onSubmit={handleSubmitFeedback}
        className='my-4 w-full'>
        <textarea
          onChange={event => setComment(event.target.value)}
          placeholder='Tell me in detail whats going on .....'
          className='min-w-[304px] w-full min-h-[112px] focus:outline-none focus:border-brand-500 text-sm resize-none placeholder-zinc-400 focus:ring-brand-500 focus:ring-1  text-zinc-100 border-zinc-600 bg-transparent rounded-md  scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'>
        </textarea>
        <footer className='flex gap-2 mt-2'>
          <ScreenShotButton
            screenshot={screenShot}
            onScreenShotTook={setScreenShoot}
          />
          <button
            type={'submit'}
            disabled={comment.length === 0}
            className={'p-2  transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 hover:bg-brand-300 focus:outline-none bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm disabled:opacity-50 hover:disabled:bg-brand-500'}
          >
            Send Feedback
          </button>
        </footer>
      </form>
    </>
  );
}


