import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { withOrientation } from 'react-navigation';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={styles.background}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView>
                <ResultsList
                    results={filterResultByPrice('$')}
                    title="Cost Effective"
                />
                <ResultsList
                    results={filterResultByPrice('$$')}
                    title="Bit Pricier"
                />
                <ResultsList
                    results={filterResultByPrice('$$$')}
                    title="Big Spender"
                />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        height: 3000,
        flex: 1
    }
});

export default SearchScreen;
