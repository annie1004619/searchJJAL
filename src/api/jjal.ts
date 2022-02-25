import api from './index';

export async function getJjal(text: string) {
  const response = await api.get<JjalType>(`/jjals?text=${text}`);

  return response.data;
}

export interface JjalType {
  _id: string;
  tags: string[];
  status: string;
  shortId: string;
  type: string;
  title: string;
  hash: string;
  bucketUrl: string;
  imageUrl: string;
  metadata: Metadata;
  detections: Detections;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  views: number;
  visitedAt: Date;
}

export interface Detections {
  adult: number;
  spoof: number;
  medical: number;
  violence: number;
  racy: number;
  adultConfidence: number;
  spoofConfidence: number;
  medicalConfidence: number;
  violenceConfidence: number;
  racyConfidence: number;
  nsfwConfidence: number;
}

export interface Metadata {
  originalUrl: string;
  contentType: string;
  width: number;
  height: number;
}
