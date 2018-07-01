import { Opaquetoken } from '@angular/core';

const PI_URL = new OpaqueToken('apiUrl');

export const THIRD_PARTY_PROVIDERS = [
{
  provide: API_URL,
  useValue: 'some other value'
}
]