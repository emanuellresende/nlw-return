import { useState } from "react"
import CloseButton from "../CloseButton"
import bugImageUrl from '../../images/bug.svg'
import ideaImageUrl from '../../images/idea.svg'
import otherImageUrl from '../../images/other.svg'
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep"
export const feedbackTypes = {
  BUG: {
    title: 'Bug',
    image: {
      source: bugImageUrl,
      alt: 'Image of an insect'
    }
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImageUrl,
      alt: 'Image of a lamp'
    }
  },
  OTHER: {
    title: 'Other',
    image: {
      source: otherImageUrl,
      alt: 'Image a thought bubble'
    }
  },
};
export type FeedbackType = keyof typeof feedbackTypes;
export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  return (
    <div className=" md:w-auto w-[calc(100vw-2rem)] shadow-lg items-center mb-4 flex flex-col bg-zinc-900 p-4 relative rounded-2xl">
      <header>
        <span className="text-xl leading-6">
          Leave your feedback
        </span>
        <CloseButton />
        {!feedbackType ? (
          <FeedBackTypeStep onFeedBackTypeChanged={setFeedbackType} />
        ) : (
          <p>asddas</p>
        )}
      </header>
      <footer className="text-xs text-neutral-400">
        Made By <a className="underline underline-offset-1" href="https://github.com/emanuellresende">Melo Emanuel</a>
      </footer>
    </div>
  );

}