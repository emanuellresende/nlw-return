import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

describe('Submit', () => {
  it('should be able to submit a feedback', async () => {
    const submitFeedback = new SubmitFeedbackUseCase(
      { create: async () => { } },
      { sendMail: async () => { } }
    )
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: "example comment",
      screenshot: 'teste.jpg'
    })).resolves.not.toThrow();
  })
})