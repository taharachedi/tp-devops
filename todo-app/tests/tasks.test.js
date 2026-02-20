const request = require('supertest');
const app = require('../index');

describe('Test API Tasks', () => {
  let taskId;

  it('POST /api/tasks → créer une tâche', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ text: 'Test Task' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.text).toBe('Test Task');
    taskId = res.body.id;
  });

  it('GET /api/tasks → récupérer les tâches', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('PUT /api/tasks/:id → marquer comme terminée', async () => {
    const res = await request(app).put(`/api/tasks/${taskId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.done).toBe(true);
  });

  it('DELETE /api/tasks/:id → supprimer la tâche', async () => {
    const res = await request(app).delete(`/api/tasks/${taskId}`);
    expect(res.statusCode).toEqual(204);
  });
});