module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8001),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "047852012961a28b73782a47cc44aad2"),
    },
  },
});
