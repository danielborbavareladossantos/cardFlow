module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'cardflow',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
