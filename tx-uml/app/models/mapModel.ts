import mongoose from 'mongoose';

const MineMarkerSchema = new mongoose.Schema({
  type: {
    type: String,
    default: 'Feature',
  },
  geometry: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number], // [lon, lat]
      required: true,
    },
  },
  properties: {
    SITE_ID: String,
    SITE_NUMBE: String,
    Mine_Name: String,
    East_TCMS: Number,
    North_TCMS: Number,
    MineType: String,
    MineLoc: String,
    Period: String,
    CoalType: String,
    LAT_DD: Number,
    LON_DD: Number,
    InfoSource: String,
    RelConfid: String,
    SiteNotes: String,
  },
}, { timestamps: true });

MineMarkerSchema.index({ geometry: '2dsphere' }); // For geospatial queries

export default mongoose.models.MineMarker ||
  mongoose.model('MineMarker', MineMarkerSchema);