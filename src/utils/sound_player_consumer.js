import SoundPlayer from './sound_player'
class SoundPlayerConsumer {
  constructor() {
    this.soundPlayer = new SoundPlayer()
  }
  playSomethingCool() {
    const coolSoundFileName = 'song.mp3'
    this.soundPlayer.playSoundFile(coolSoundFileName)
  }
}
export default SoundPlayerConsumer
