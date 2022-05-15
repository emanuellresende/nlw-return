import CloseButton from "../CloseButton"
import bugImageUrl from '../../images/bug.svg'
import ideaImageUrl from '../../images/idea.svg'
import otherImageUrl from '../../images/other.svg'
const feedbackTypes = {
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
export function WidgetForm() {
  return (
    <div className="md:w-auto w-[calc(100vw-2rem)] shadow-lg items-center mb-4 flex flex-col bg-zinc-900 p-4 relative rounded-2xl">
      <header>
        <span className="text-xl leading-6">
          Leave your feedback
        </span>
        <CloseButton />
        <div className="flex py-8 gap-2 w-full ">
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button className=" focus:outline-none focus:border-brand-500 border-2 border-transparent hover:border-brand-500 bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center">
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
      </header>
      <footer className="text-xs text-neutral-400">
        Made By <a className="underline underline-offset-1" href="https://github.com/emanuellresende">Melo Emanuel</a>
      </footer>
    </div>
  );

}