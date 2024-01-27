import express from 'express'
import router  from './routes'
import cron from 'node-cron'
import { reservations_updateToExpired } from './db/reservations'

const app = express()

app.use(express.json())

app.use('/', router());
// Planifier la tâche pour s'exécuter à minuit tous les jours
cron.schedule('0 0 * * *', async () => {
  try {
      console.log('Exécution de la mise à jour des réservations expirées...');
      const updatedReservations = await reservations_updateToExpired();
      console.log('Mise à jour terminée. Réservations mises à jour:', updatedReservations);
  } catch (error) {
      console.error('Erreur lors de la mise à jour des réservations expirées')
  }
});



const server = app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`),)