'use client';

import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import {useState} from 'react';

export default () => {
  const [character, setCharacter] = useState({
    name: 'My Name',
    description: {
      base: '',
      commonInfo: '',
      littleKnown: ''
    },
    drive: {
      currentSituation: '',
      goal: '',
      blockers: ''
    },
    relationships: [],
    attributes: [],
    conditions: [],
    resources: [],
    destiny: []
  });

  function submit(e) {
    e.preventDefault();
  }

  function change(e) {
    const path = e.target.id.split('.');
    const newCharacter = {...character};
    const obj = path.slice(0, -1).reduce((obj, item) => {
      return obj[item];
    }, newCharacter);
    obj[path.at(-1)] = e.target.value;
    setCharacter(newCharacter);
  }

  function addArray(key) {
    setCharacter({
      ...character,
      [key]: character[key].concat([{}])
    });
      
  }

  function removeArray(key, index) {
    setCharacter({
      ...character,
      [key]: character[key].filter((_, i) => i != index)
    });
  }

  console.log(character);

  return (
    <form onChange={change} onSubmit={submit}>
      <TextField
        id='name'
        sx={{width: 350}}
        label='Name(s)'
        multiline
        value={character.name}
      />

      <p>Description</p>
      <TextField
        id='description.base'
        label='Character Description'
        multiline
        value={character.description.base}
      />
      <TextField
        id='description.commonInfo'
        label='Common Knowledge'
        multiline
        value={character.description.commonInfo}
      />
      <TextField
        id='description.littleKnown'
        label='Little Known Facts'
        multiline
        value={character.description.littleKnown}
      />

      <p>Drive</p>
      <TextField
        id='drive.currentSituation'
        label='What is your current situation?'
        multiline
        value={character.drive.currentSituation}
      />
      <TextField
        id='drive.goal'
        label='What are you trying to accomplish?'
        multiline
        value={character.drive.goal}
      />
      <TextField
        id='drive.blockers'
        label='What stands in your way?'
        multiline
        value={character.drive.blockers}
      />

      <p>Relationships</p>
      {character.relationships.map((relationship, i) => (
        <div key={i}>
          <TextField
            id={`relationships.${i}.who`}
            label='Who'
            value={character.relationships[i].who}
          />
          <TextField
            id={`relationships.${i}.value`}
            label='Value'
            type='number'
            value={character.relationships[i].value}
          />
          <TextField
            id={`relationships.${i}.context`}
            label='Context'
            multiline
            value={character.relationships[i].context}
          />
          <TextField
            id={`relationships.${i}.openQuestions`}
            label='Open Questions'
            multiline
            value={character.relationships[i].openQuestions}
          />
          <button onClick={() => removeArray('relationships', i)}>X</button>
        </div>
      ))}
      <button onClick={() => addArray('relationships')}>Add</button>

      <p>Attributes</p>
      {character.attributes.map((attribute, i) => (
        <div key={i}>
          <TextField
            id={`attributes.${i}.name`}
            label='Name'
            value={character.attributes[i].name}
          />
          <TextField
            id={`attributes.${i}.value`}
            label='Value'
            type='number'
            value={character.attributes[i].value}
          />
          <TextField
            id={`attributes.${i}.hierarchy`}
            label='Type'
            select
            value={character.attributes[i].hierarchy || 'normal'}
            onChange={e => {
              const newAttributes = [...character.attributes];
              newAttributes[i] = {
                ...newAttributes[i],
                hierarchy: e.target.value
              };
              setCharacter({...character, attributes: newAttributes});
            }}
          >
            <MenuItem value='wide'>Wide</MenuItem>
            <MenuItem value='broad'>Broad</MenuItem>
            <MenuItem value='normal'>Normal</MenuItem>
            <MenuItem value='narrow'>Narrow</MenuItem>
            <MenuItem value='special'>Special</MenuItem>
          </TextField>
          <TextField
            id={`attributes.${i}.source`}
            label='Where does it come from?'
            multiline
            value={character.attributes[i].source}
          />
          <button onClick={() => removeArray('attributes', i)}>X</button>
        </div>
      ))}
      <button onClick={() => addArray('attributes')}>Add</button>

      <p>Conditions</p>
      <p>Resources</p>
      <p>Destiny</p>
    </form>
  );
};

