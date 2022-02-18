import { FlexScriptType } from '../src/createScriptExample'

declare global {
    interface Window {
        $flex: FlexScriptType
    }
}
