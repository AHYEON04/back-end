const mongoose = require("mongoose");

const { Schema } = mongoose;
const favoriteSchema = new Schema({
  placeId: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: { type: [Number], index: "2dsphere" }, // 경도와 위도 정보가 배열로 위치 정보를 저장
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
