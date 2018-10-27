class Github {
  constructor() {
    this.client_id = '12a1c667641fd385d707';
    this.client_secret = '640adb91018b2d1edde126f2b858d1a91c725b70';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}