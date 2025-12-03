import { User } from '@/payload-types';
import payload from 'payload';

export async function createUserWithTenant(userData: {
  email: string;
  password: string;
  tenantNames: string[];
}) {
  const tenants = await Promise.all(
    userData.tenantNames.map(name =>
      payload.create({
        collection: 'tenants',
        data: {
          name,
          slug: name.toLocaleLowerCase().replace(/\s+/g, '-'),
        }
      })
    )
  )
  const user = await payload.create({
    collection: 'users',
    data: {
      email: userData.email,
      password: userData.password,
      tenants: tenants.map(t => ({ tenant: t.id })),
    },
  })
  return user;
}