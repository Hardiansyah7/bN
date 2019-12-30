import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nama: "MUHAMMAD SAW.",
            alias: "Muhammad bin Abdullah.",
            usia: "63 tahun.",
            periode: "570-632 M.",
            tempat_diutus: "Mekkah.",
            disebut: "Al-Quran menyebutkan namanya sebanyak 25 kali.",
            keturunan: "7 anak; 3 laki-laki Qasim, Abdullah dan Ibrahim, dan 4 perempuan Zainab, Ruqayyah, Ummi Kultsum dan Fatimah az-Zahra.",
            kaum: "Bangsa Arab.",
            tempat_wafat: "Madinah.",
            code: '#2c3e50'
        }
    }

    navigateToDetail(a, b, c, d, e, f, g, h, i) {

    }

    render() {
        const items = [
            { nama: "ADAM AS.", alias: "Adam As.", usia: "930 tahun.", periode: "5872-4942 SM.", tempat_diutus: "India, ada yang berpendapat di Jazirah Arab.", disebut: "Al-Quran menyebutkan namanya sebanyak 25 kali.", keturunan: "40 laki-laki dan perempuan.", kaum: "", tempat_wafat: "India, ada yang berpendapat di Mekkah.", code: '#2ecc71' },
            { nama: "IDRIS AS.", alias: "Idris/Akhnukh bin Yarid, nama Ibunya Asyut.", usia: "345 tahun", periode: "4533-4188 SM. ", tempat_diutus: "Irak Kuno (Babylon, Babilonia) dan Mesir (Memphis). ", disebut: "Al-Quran menyebutkan namanya sebanyak 2 kali.", keturunan: "", kaum: "", tempat_wafat: "Allah mengangkatnya ke langit dan ke surga. ", code: '#9b59b6' },
            { nama: "NUH AS. ", alias: "Nuh/Yasykur/Abdul Ghaffar bin Lamak.", usia: "950 tahun. ", periode: "3993-3043 SM. ", tempat_diutus: "Selatan Irak.", disebut: "Al-Quran menyebutkan namanya sebanyak 43 kali.", keturunan: "4 putra (Sam, Ham, Yafits dan Kan’an).", kaum: "Kaum Nuh.", tempat_wafat: "Mekkah.", code: '#1abc9c' },
            { nama: "HUD AS. ", alias: "Hud bin Abdullah.", usia: "130 tahun.", periode: "2450-2320 SM.", tempat_diutus: "Al-Ahqaf (antara Yaman dan Oman).", disebut: "Al-Quran menyebutkan namanya sebanyak 7 kali.", keturunan: "", kaum: "Kaum ‘Ad.", tempat_wafat: "Bagian Timur Hadhramaut Yaman.", code: '#3498db', code: '#34495e' },
            { nama: "SHALIH AS.", alias: "Shalih bin Ubaid.", usia: "70 tahun.", periode: "2150-2080 SM.", tempat_diutus: "Daerah al-Hijr (Mada’in Shalih, antara Madinah dan Syria).", disebut: "Al-Quran menyebutkan namanya sebanyak 10 kali.", keturunan: "", kaum: "Kaum Tsamud.", tempat_wafat: "Mekkah.", code: '#16a085' },
            { nama: "IBRAHIM AS.", alias: "Ibrahim bin Tarakh.", usia: "175 tahun.", periode: "1997-1822 SM.", tempat_diutus: "Ur, daerah selatan Babylon (Irak).", disebut: "Al-Quran menyebutkan namanya sebanyak 69 kali.", keturunan: "13 anak (termasuk Nabi Ismail As. dan Nabi Ishaq As.).", kaum: "Bangsa Kaldan", tempat_wafat: "Al-Khalil (Hebron, Palestina/Israel).", code: '#2980b9' },
            { nama: "LUTH AS.", alias: "Luth bin Haran.", usia: "80 tahun.", periode: "1950-1870 SM.", tempat_diutus: "Sodom dan Amurah (Laut Mati atau Danau Luth).", disebut: "Al-Quran menyebutkan namanya sebanyak 27 kali.", keturunan: "2 putri (Ratsiya dan Za’rita).", kaum: "Kaum Luth.", tempat_wafat: "Desa Shafrah di Syam (Syria).", code: '#27ae60' },
            { nama: "ISMAIL AS.", alias: "Ismail bin Ibrahim.", usia: "137 tahun.", periode: "1911-1774 SM.", tempat_diutus: "Mekah.", disebut: "Al-Quran menyebutkan namanya sebanyak 12 kali.", keturunan: "Amaliq dan Kabilah Yaman.", kaum: "", tempat_wafat: "Mekah.", code: '#8e44ad' },
            { nama: "ISHAQ AS.", alias: "Ishaq bin Ibrahim.", usia: "180 tahun.", periode: "1897-1717 SM.", tempat_diutus: "Kota al-Khalil (Hebron) di daerah Kan’an (Kana’an).", disebut: "Al-Quran menyebutkan namanya sebanyak: 17 kali.", keturunan: "2 anak (termasuk Nabi Ya’qub As./Israel).", kaum: "Bangsa Kan’an.", tempat_wafat: "Al-Khalil (Hebron).", code: '#2c3e50' },
            { nama: "YA’QUB AS.", alias: "Ya’qub/Israel bin Ishaq.", usia: "147 tahun.", periode: "1837-1690 SM.", tempat_diutus: "Syam (Syria).", disebut: "Al-Quran menyebutkan namanya sebanyak 18 kali.", keturunan: "12 anak laki-laki (Rubin, Simeon, Lewi, Yahuda, Dan, Naftali, Gad, Asyir, Isakhar, Zebulaon, Yusuf dan Benyamin) dan 2 anak perempuan (Dina dan Yathirah).", kaum: "Bangsa Kan’an.", tempat_wafat: "Al-Khalil (Hebron), Palestina.", code: '#f1c40f' },
            { nama: "YUSUF AS.", alias: "Yusuf bin Ya’qub.", usia: "110 tahun.", periode: "1745-1635 SM.", tempat_diutus: "Nablus.", disebut: "Al-Quran menyebutkan namanya sebanyak 58 kali.", keturunan: "3 anak; 2 laki-laki dan 1 perempuan.", kaum: "Heksos dan Bani Israel.", tempat_wafat: "Mesir.", code: '#e67e22' },
            { nama: "AYYUB AS.", alias: "Ayyub bin Amush.", usia: "120 tahun.", periode: "1540-1420 SM.", tempat_diutus: "Dataran Hauran.", disebut: "Al-Quran menyebutkan namanya sebanyak 4 kali.", keturunan: "26 anak.", kaum: "Bangsa Arami dan Amori, di daerah Syria dan Yordania.", tempat_wafat: "Dataran Hauran.", code: '#e74c3c' },
            { nama: "SYU’AIB AS.", alias: "Syu’aib bin Mikail.", usia: "110 tahun.", periode: "1600-1490 SM.", tempat_diutus: "Madyan (pesisir Laut Merah di tenggara Gunung Sinai).", disebut: "Al-Quran menyebutkan namanya sebanyak: 11 kali.", keturunan: "2 anak perempuan.", kaum: "Madyan dan Ash-habul Aikah.", tempat_wafat: "Yordania.", code: '#1abc9c' },
            { nama: "MUSA AS.", alias: "Musa bin Imran, nama Ibunya Yukabad atau Yuhanaz Bilzal.", usia: "120 tahun.", periode: "1527-1407 SM.", tempat_diutus: "Sinai di Mesir.", disebut: "Al-Quran menyebutkan namanya sebanyak 136 kali.", keturunan: "2 anak, Azir dan Jarsyun, dari istrinya bernama Shafura binti Syu’aib As. ", kaum: "Bani Israel dan Fir’aun (gelar raja Mesir).", tempat_wafat: "Gunung Nebu (Bukit Nabu’) di Jordania (sekarang).", code: '#2ecc71' },
            { nama: "HARUN AS.", alias: "Harun bin Imran, istrinya bernama Ayariha.", usia: "123 tahun.", periode: "1531-1408 SM", tempat_diutus: "Sinai di Mesir.", disebut: "Al-Quran menyebutkan namanya sebanyak: 20 kali", keturunan: "", kaum: "Bani Israel dan Fir’aun (gelar raja Mesir).", tempat_wafat: "Gunung Nebu (Bukit Nabu’) di Jordania (sekarang)", code: '#f39c12' },
            { nama: "DZULKIFLI AS.", alias: "Dzulkifli/Bisyr/Basyar bin Ayyub.", usia: "75 tahun.", periode: "1500-1425 SM.", tempat_diutus: "Damaskus dan sekitarnya.", disebut: "Al-Quran menyebutkan namanya sebanyak 2 kali.", keturunan: "", kaum: "Bangsa Arami dan Amori (Kaum Rom), Syria dan Yordania.", tempat_wafat: "Damaskus.", code: '#d35400' },
            { nama: "DAUD AS.", alias: "Daud bin Isya.", usia: "100 tahun.", periode: "1063-963 SM.", tempat_diutus: "Palestina (dan Israel).", disebut: "Al-Quran menyebutkan namanya sebanyak 18 kali.", keturunan: "1 anak, Sulaiman As.", kaum: "Bani Israel.", tempat_wafat: "Baitul Maqdis (Yerusalem).", code: '#c0392b' },
            { nama: "SULAIMAN AS.", alias: "Sulaiman bin Daud.", usia: "66 tahun.", periode: "989-923 SM.", tempat_diutus: "Palestina (dan Israel).", disebut: "Al-Quran menyebutkan namanya sebanyak 21 kali.", keturunan: "1 anak, Rahab’an.", kaum: "Bani Israel.", tempat_wafat: "Baitul Maqdis (Yerusalem).", code: '#3498db' },
            { nama: "ILYAS AS.", alias: "Ilyas bin Yasin.", usia: "60 tahun", periode: "910-850 SM.", tempat_diutus: "Ba’labak (Lebanon).", disebut: "Al-Quran menyebutkan namanya sebanyak 4 kali.", keturunan: "", kaum: "Bangsa Fenisia.", tempat_wafat: "Diangkat Allah ke langit.", code: '#9b59b6' },
            { nama: "ILYASA’ AS.", alias: "Ilyasa’ bin Akhthub.", usia: "90 tahun.", periode: "885-795 SM.", tempat_diutus: "Jaubar, Damaskus.", disebut: "Al-Quran menyebutkan namanya sebanyak 2 kali.", keturunan: "", kaum: "Bangsa Arami dan Bani Israel.", tempat_wafat: "Palestina.", code: '#34495e' },
            { nama: "YUNUS AS.", alias: "Yunus/Yunan/Dzan Nun bin Matta binti Abumatta, Matta adalah nama Ibunya. (Catatan: Tidak ada dari para nabi yang dinasabkan ke Ibunya kecuali Yunus dan Isa As.).", usia: "70 tahun.", periode: "820-750 SM.", tempat_diutus: "Ninawa, Irak.", disebut: "Al-Quran menyebutkan namanya sebanyak 5 kali.", Kaum: "", tempat_wafat: "Bangsa Asyiria, di utara Irak., Ninawa, Irak.", code: '#16a085' },
            { nama: "ZAKARIYA AS.", alias: "Zakariya bin Dan.", usia: "122 tahun.", periode: "91 SM-31 M.", tempat_diutus: "Palestina.", disebut: "Al-Quran menyebutkan namanya sebanyak 12 kali.", keturunan: "1 Anak", kaum: "Bani Israel", tempat_wafat: "Halab (Aleppo).", code: '#27ae60' },
            { nama: "YAHYA AS.", alias: "Yahya bin Zakariya.", usia: "32 tahun.", periode: "1 SM-31 M.", tempat_diutus: "Palestina.", disebut: "Al-Quran menyebutkan namanya sebanyak 5 kali.", keturunan: "", kaum: "Bani Israel", tempat_wafat: "Damaskus.", code: '#2980b9' },
            { nama: "ISA AS.", alias: "Isa bin Maryam binti Imran. (Catatan: Tidak ada dari para nabi yang dinasabkan ke Ibunya kecuali Yunus dan Isa As.).", usia: "33 tahun", periode: "1 SM-32 M.", tempat_diutus: "Palestina.", disebut: "Al-Quran menyebutkan namanya sebanyak 21 kali, sebutan al-Masih sebanyak 11 kali, dan sebutan Ibnu (Putra) Maryam sebanyak 23 kali.", keturunan: "", kaum: "Bani Israel.", tempat_wafat: "Diangkat oleh Allah ke langit.", code: '#8e44ad' },
        ]
        return (
            <View style={{ flex: 1 }}>

                {/* Header */}
                <View style={{ height: 100, backgroundColor: '#458cff', justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 36, color: 'white', fontWeight: 'bold' }}>Biodata 25 Nabi</Text>
                </View>

                {/* CONTENT */}
                <ScrollView style={{ flex: 1 }}>
                    <FlatGrid
                        itemDimension={150}
                        spacing={10}
                        itemWidth={200}
                        items={items}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.code }]} onPress={() => this.props.navigation.navigate('Detail', { nama: item.nama, alias: item.alias, usia: item.usia, periode: item.periode, tempat_diutus: item.tempat_diutus, disebut: item.disebut, keturunan: item.keturunan, kaum: item.kaum, tempat_wafat: item.tempat_wafat })} activeOpacity={.4}>
                                <Text style={styles.itemName}>{item.nama}</Text>
                                <Text style={styles.itemCode}>{item.periode}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    <TouchableOpacity style={{ backgroundColor: '#2c3e50', height: 150, marginBottom: 20, marginTop: -10, marginHorizontal: 10, borderRadius: 5, justifyContent: 'flex-end', padding: 10 }} onPress={() => this.props.navigation.navigate('Detail', { nama: this.state.nama, alias: this.state.alias, usia: this.state.usia, periode: this.state.periode, tempat_diutus: this.state.tempat_diutus, disebut: this.state.disebut, keturunan: this.state.keturunan, kaum: this.state.kaum, tempat_wafat: this.state.tempat_wafat })} >
                        <Text style={styles.itemName}>{this.state.nama}</Text>
                        <Text style={styles.itemCode}>{this.state.periode}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});