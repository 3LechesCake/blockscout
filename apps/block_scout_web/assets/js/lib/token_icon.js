function getTokenIconUrl (chainID, addressHash) {
  let chainName = null
  switch (chainID) {
    case '6066':
      chainName = 'tresleches'
      break
    case '6065':
      chainName = 'tresleches'
      break
    case '100':
      chainName = 'xdai'
      break
    default:
      chainName = null
      break
  }
  if (chainName) {
    return `https://raw.githubusercontent.com/treslecheschain/assets/master/blockchains/${chainName}/assets/${addressHash}/logo.png`
  } else {
    return null
  }
}

function appendTokenIcon ($tokenIconContainer, chainID, addressHash, displayTokenIcons, size) {
  const iconSize = size || 20
  const tokenIconURL = getTokenIconUrl(chainID.toString(), addressHash)
  if (displayTokenIcons) {
    checkLink(tokenIconURL)
      .then(checkTokenIconLink => {
        if (checkTokenIconLink) {
          if ($tokenIconContainer) {
            const img = new Image(iconSize, iconSize)
            img.src = tokenIconURL
            img.className = 'mr-1'
            $tokenIconContainer.append(img)
          }
        }
      })
  }
}

async function checkLink (url) {
  if (url) {
    try {
      const res = await fetch(url)
      return res.ok
    } catch (_error) {
      return false
    }
  } else {
    return false
  }
}

export { appendTokenIcon, checkLink, getTokenIconUrl }
