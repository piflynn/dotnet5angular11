import { Photo } from './photo.model';

export interface Member {
  id: number;
  age: number;
  userName: string;
  photoUrl: string;
  dateOfBirth: string;
  knownAs: string;
  created: Date;
  lastActive: Date;
  gender: string;
  introduction: string;
  lookingFor: string;
  interests: string;
  city: string;
  country: string;
  photos: Photo[];
}
