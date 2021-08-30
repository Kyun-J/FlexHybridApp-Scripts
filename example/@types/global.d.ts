import flexType from '../src/scriptExample'

declare global {
    interface Window {
        $flex: flexType
    }
}
