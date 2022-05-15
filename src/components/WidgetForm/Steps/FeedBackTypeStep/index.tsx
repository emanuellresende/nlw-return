import bugImageUrl from '../../../images/bug.svg'
import ideaImageUrl from '../../../images/idea.svg'
import otherImageUrl from '../../../images/other.svg'

import {FeedbackType, feedbackTypes} from '../../'
interface FeedBackTypeStepProps{
  onFeedBackTypeChanged: (type: FeedbackType) => void
}

export function FeedBackTypeStep(props: FeedBackTypeStepProps) {
  return (
    <div className="flex py-8 gap-2 w-full ">
      {Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button className=" focus:outline-none focus:border-brand-500 border-2 border-transparent hover:border-brand-500 bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center"
            key={key}
            type={'button'}
            onClick={() => {
              props.onFeedBackTypeChanged(key as FeedbackType);
            }}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        );
      })}
    </div>
  );
}


