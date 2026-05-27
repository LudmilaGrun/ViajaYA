insert into categories(name) values ('Aventura'),('Playa'),('Ciudad') on conflict do nothing;
insert into destinations(name,country,image_url) values
('Cancún','México','https://images.unsplash.com/photo-1510097467424-192d713fd8b2'),
('Cartagena','Colombia','https://images.unsplash.com/photo-1536098561742-ca998e48cbcc')
on conflict do nothing;
