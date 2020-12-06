import Note from '../components/Note'
import { connect } from 'react-redux'
import { Card, Container, Checkbox, Pagination, Grid, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { useHistory } from "react-router";
import React from 'react'

const NotesContainer = (props) => {

    const history = useHistory()
    const location = history.location.pathname

    const [visible, setVisible] = React.useState(true)
    const [sortBy, setSortBy] = React.useState('updated')
    const [page, setPage] = React.useState(1)
    const [searchBar, setSearchBar] = React.useState('')
    const [totalPages, setTotalPages] = React.useState(Math.floor(props.notes.length/12) + 1)

    const search = (e) => {
        setSearchBar(e.target.value)
    }

    const pageChange = (e, { activePage }) => {
        setPage(activePage)
    }

    const handleSortBy = (e) => {       
        if(sortBy === '' || (sortBy !== e.target.dataset.sort && sortBy !== `${e.target.dataset.sort}_ASC`)){
            setSortBy(e.target.dataset.sort)
        } else if ( sortBy === e.target.dataset.sort){
            setSortBy(`${e.target.dataset.sort}_ASC`)
        } else if ( sortBy === `${e.target.dataset.sort}_ASC`){
            setSortBy('')
        }
    }

    const noteSort = () => {

        // Get this to sort everything, then search, then paginate? 
        let notes = [...props.notes]

        notes = notes.filter(n => n.title.toUpperCase().includes(searchBar.toUpperCase()))
        
        // Get the pages to refelct how many search results
        // if(searchBar !== ''){
        //     setTotalPages(Math.floor(notes.length/12) + 1)
        // }

        notes = page === 1 ? notes.slice(0,12) 
        : notes.slice((page - 1) * 12, page * 12)

        

        switch(sortBy){
            case "title":
                return notes.sort( (noteA, noteB ) => noteA.title[0].toUpperCase() < noteB.title[0].toUpperCase() ? -1 : 1)
            case "title_ASC":
                return notes.sort( (noteA, noteB ) => noteA.title[0].toUpperCase() > noteB.title[0].toUpperCase() ? -1 : 1)
            case "updated":
                return notes.sort( (noteA, noteB ) => noteA.updated_at < noteB.updated_at ? -1 : 1) 
            case "updated_ASC":
                return notes.sort( (noteA, noteB ) => noteA.updated_at > noteB.updated_at ? -1 : 1) 
            case "created":
                // IS THIS SORTING?
                return notes.sort( (noteA, noteB ) => noteA.created_at < noteB.created_at ? -1 : 1) 
            case "created_ASC":
                return notes.sort( (noteA, noteB ) => noteA.created_at < noteB.created_at ? -1 : 1) 
            
            default:
                return notes
        }
    }

    const notesToShow = noteSort()

    return (  
    // VISIBILITY CHECKBOX REMOVE THIS WHEN YOU ADD A HOVER BUTTON
        <Grid columns={1}>
        <Grid.Column>
          <Checkbox
            checked={visible}
            onChange={(e, data) => setVisible(data.checked)}
          />
        </Grid.Column>

  {/* SIDEBAR */}
        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              onHide={() =>  setVisible(false)}
              vertical
              visible={visible}
              width='wide'
            >
              <Menu.Item as='a'>
                  <input type="text" value={searchBar} onChange={search}/>
                Search
              </Menu.Item>
              <Menu.Item as='a'
              data-sort="title"
              onClick={handleSortBy}>
                Sort By Title
                {sortBy === "title" ? <Icon name="sort up"/> : null } 
                {sortBy === "title_ASC" ? <Icon name="sort down"/> : null }
              </Menu.Item>
              <Menu.Item as='a'
              data-sort="updated"
              onClick={handleSortBy}>
                Sort By Last Updated
                {sortBy === "updated" ? <Icon name="sort up"/> : null } 
                {sortBy === "updated_ASC" ? <Icon name="sort down"/> : null }
              </Menu.Item>
              <Menu.Item as='a'
              data-sort="created"
              onClick={handleSortBy}>
                Sort By Date Created
                {sortBy === "created" ? <Icon name="sort up"/> : null } 
                {sortBy === "created_ASC" ? <Icon name="sort down"/> : null }
              </Menu.Item>
            </Sidebar>

 {/*PAGE CONTENT  */}
        <Sidebar.Pusher>  
        <Container className='note-card'> 
                <Card.Group centered>
                    {location.includes(props.showNote.id) ? <Note {...props.showNote} key={props.showNote.id}/>
                    :
                    notesToShow.map(note => <Note {...note} key={note.id}/>)}                
                </Card.Group>
                    
                    {location.includes(props.showNote.id) ? null :
                    <Segment textAlign='center'>               
                        <Pagination
                            defaultActivePage={1}
                            totalPages={totalPages}
                            onPageChange={pageChange}
                        />
                    </Segment>}
        </Container>
        </Sidebar.Pusher>

        </Sidebar.Pushable>
      </Grid.Column>
      </Grid>

    );
}
 
const readAccess = (state) => {
   return {
       notes: state.notes,
       loading: state.loading,
       showNote: state.showNote
   }
}

export default connect(readAccess)(NotesContainer);