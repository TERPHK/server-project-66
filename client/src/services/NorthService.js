import Api from '@/services/Api'
export default {
    index(north) {
        return Api().get('norths')
    },
    show(northId) {
        return Api().get('north/' + northId)
    },
    post(north) {
        return Api().post('north', north)
    },
    put(north) {
        return Api().put('north/' + north.id, north)
    },
    delete(north) {
        return Api().delete('north/' + north.id, north)
    },
}