import { v4 as uuidV4 } from 'uuid';

class User {
  id: string;

  name: string;

  admin: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }

    if (this.admin === undefined) {
      this.admin = false;
    }

    if (!this.created_at) {
      this.created_at = new Date();
    }

    if (!this.updated_at) {
      this.updated_at = new Date();
    }
  }
}

export { User };
