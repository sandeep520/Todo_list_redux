import React,{memo} from 'react'

function FavouriteButton({addFavourite,id,isFavourite}) {
    return <button type="button" class="btn btn-success" onClick={() => addFavourite(id)}>{!isFavourite ? 'Favourite': 'UnFavourite'}</button>
}

export default memo(FavouriteButton);
