import express from 'express';
const router = express.Router();

// Araç Fiyat Güncelleme
router.put('/vehicles/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(vehicle);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Tüm Rezervasyonları Listeleme
router.get('/reservations', async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .populate('vehicle')
      .sort({ date: -1 });
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json(err);
  }
});
