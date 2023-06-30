import MarkdownPreview from '@uiw/react-markdown-preview'
import styles from '../styles/EditorSide.module.scss'
import Editor from '@monaco-editor/react'
import { useState, useEffect } from 'react'
import { useModal } from '../providers/ModalProvider'

export default function EditorSide (): JSX.Element {
  const { show } = useModal()

  const [fontSize, setFontSize] = useState(18)
  const [doc, setDoc] = useState('')

  const handleChange = (value: string): void => {
    setDoc(value)
  }

  const handleIncreaseFontSize = (): void => {
    setFontSize(fontSize + 1)
  }

  useEffect(() => {
    setDoc('# Hola mundo')
  }, [])

  return (
    <div className={styles.container}>
        <div className={styles.editor}>
            <div className={styles.titleEditor}>

              <button onClick={handleIncreaseFontSize}>Aumentar fuente</button>
            </div>
            {
              !show && <Editor
              onChange={e => { handleChange(e ?? '') }}
              defaultLanguage="markdown"
              value={doc}
              height='calc(100% - 60px)'
              className={styles.monacoEditor}
              theme='vs-dark'
              options={{
                fontSize,
                minimap: {
                  enabled: false
                },
                padding: {
                  bottom: 0
                },
                definitionLinkOpensInPeek: false,
                lineNumbers: 'off',
                glyphMargin: false,
                folding: false,
                lineDecorationsWidth: 0,
                fontFamily: "'Hack Nerd Font Mono', 'JetBrains Mono'",
                fontLigatures: true,
                wordWrap: 'on',
                wrappingIndent: 'indent',
                scrollBeyondLastLine: false,
                overviewRulerBorder: false,
                cursorBlinking: 'expand',
                hideCursorInOverviewRuler: true,
                renderLineHighlight: 'none',
                scrollbar: {
                  vertical: 'hidden',
                  horizontal: 'hidden',
                  verticalScrollbarSize: 0,
                  horizontalScrollbarSize: 0
                },
                overviewRulerLanes: 0,
                selectionHighlight: false,
                occurrencesHighlight: false,
                cursorStyle: 'line',
                language: 'markdown',
                guides: {
                  highlightActiveBracketPair: true
                }
              }}
          />
            }

        </div>
        <div className={styles.preview}>
          <MarkdownPreview
            style={{ fontFamily: 'Cascadia Code' }}
            className={styles.markdownPreview}
            source={doc}
            unwrapDisallowed
          />
        </div>
    </div>
  )
}
