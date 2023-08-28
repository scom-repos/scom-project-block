import { Styles } from "@ijstech/components";

export const containerStyle = Styles.style({
  width: 'var(--layout-container-width)',
  maxWidth: 'var(--layout-container-max_width)',
  textAlign: ('var(--layout-container-text_align)' as any),
  margin: '0 auto',
  padding: 10
})

export const projectBlockStyle = Styles.style({
  display: 'block',
  $nest: {
    '&.project-block-dark--theme': {
      background: '#100c2a',
      $nest: {
        'i-label': {
          color: '#fff !important'
        },
        'i-label.text-black': {
          color: '#000 !important'
        },
        'i-pagination': {
          $nest: {
            '.pagination a': {
              color: '#fff !important'
            }
          }
        },
        'thead div': {
          color: '#fff'
        },
        'i-table': {
          $nest: {
            'tr:hover td': {
              background: '#251e60a1'
            },
            'thead': {
              background: '#ff9800',
              color: '#fff !important'
            }
          }
        },
        'i-progress .i-progress_overlay': {
          background: '#ff9800 !important'
        },
        'i-progress .i-progress_wrapbar .i-progress_bar.has-bg': {
          background: '#d0c1c15e'
        },
        '::-webkit-scrollbar-track': {
          background: '#d9bba859'
        },
        '::-webkit-scrollbar-thumb': {
          background: '#ff9800',
        }
      }
    },
    'i-progress .i-progress_wrapbar': {
      borderRadius: 4
    },
    'i-input input': {
      border: 'none',
      background: 'transparent'
    },
    'i-table': {
      fontSize: '12px',
      $nest: {
        '.i-table-container': {
          overflowY: 'auto',
          height: 'inherit'
        },
        'thead': {
          background: 'var(--background-modal)',
          position: 'sticky',
          top: 0,
          zIndex: 1
        },
        'tr:hover td': {
          background: 'var(--colors-secondary-main)',
          color: 'var(--colors-secondary-contrast_text)',
          $nest: {
            'i-label': {
              color: 'var(--colors-secondary-contrast_text)'
            }
          }
        }
      }
    },
    'i-pagination': {
      lineHeight: '24px',
      $nest: {
        '.pagination a': {
          minWidth: 30,
          height: 25,
          fontSize: 12,
          padding: '0 2px'
        },
        '.pagination a.active': {
          background: '#ff9800',
          borderColor: '#ff9800'
        }
      }
    },
    '::-webkit-scrollbar': {
      width: '5px',
      height: '5px'
    },
    '::-webkit-scrollbar-track': {
      borderRadius: '10px',
      border: '1px solid transparent',
      background: 'rgba(0, 0, 0, 0.12)'
    },
    '::-webkit-scrollbar-thumb': {
      background: 'rgba(0, 0, 0, 0.35)',
      borderRadius: '10px'
    },
    '#pnlModule': {
      height: '100%'
    }
  }
})
