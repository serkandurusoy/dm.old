Isler.permit('insert').ifLoggedIn().apply();

Isler.permit('update').never().apply();

Isler.permit('remove').never().apply();
