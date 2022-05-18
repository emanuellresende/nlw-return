import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}
export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter,
  ) { }
  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;
if(!type){
  throw new Error('erro')
}
    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })

    await this.mailAdapter.sendMail({
      subject: 'New feedback',
      body: [
        ` <p>Type feedback: ${type}</p>`,
        ` <p>Comment: ${comment}</p>`,
      ].join('\n')
    })

  }
}