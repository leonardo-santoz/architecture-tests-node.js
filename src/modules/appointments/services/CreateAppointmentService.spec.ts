import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('sould be able to create a new appointment', async () => {
    const fakeCreateAppointmentRepository = new FakeAppointmentsRepository();
    const createAppointmentService = new CreateAppointmentService(
      fakeCreateAppointmentRepository,
    );

    const appointment = await createAppointmentService.execute({
      date: new Date(),
      provider_id: '123123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123');
  });

  // it('sould not be able to create two appointments on the same time', () => {
  //   expect(1 + 2).toBe(3);
  // });
});