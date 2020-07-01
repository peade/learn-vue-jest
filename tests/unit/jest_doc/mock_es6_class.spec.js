// export default 导出方式
// import SoundPlayer from "@/utils/sound_player"
// jest.mock('@/utils/sound_player')

// 非 export default 导入方式
import SoundPlayer from '@/utils/sound_player'
import SoundPlayerConsumer from '@/utils/sound_player_consumer'
const mockPlaySoundFile = jest.fn()
jest.mock('@/utils/sound_player', () => {
  return jest.fn().mockImplementation(() => {
    return { playSoundFile: mockPlaySoundFile }
  })
})
describe('mock fn', () => {
  beforeEach(() => {
    SoundPlayer.mockClear()
    mockPlaySoundFile.mockClear()
  })

  it('The consumer should be able to call new() on SoundPlayer', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer()
    // Ensure constructor created the object:
    expect(soundPlayerConsumer).toBeTruthy()
  })

  it('We can check if the consumer called the class constructor', () => {
    new SoundPlayerConsumer()
    expect(SoundPlayer).toHaveBeenCalledTimes(1)
  })

  it('We can check if the consumer called a method on the class instance', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer()
    const coolSoundFileName = 'song.mp3'
    soundPlayerConsumer.playSomethingCool()
    expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName)
  })
})
